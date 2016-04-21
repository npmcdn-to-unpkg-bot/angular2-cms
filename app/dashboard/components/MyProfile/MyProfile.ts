import {Component,Input,OnInit} from 'angular2/core';
import {MyProfileService} from '../../services/MyProfile/MyProfileService';
import {ProfileRestClient} from '../../../clients/ProfileRestClient/ProfileRestClient';
import {Interceptor} from '../../../common/RestUtil/Interceptor';
import {HTTP_PROVIDERS} from 'angular2/http';
import {AccountRestClient} from '../../../clients/accountRestClient/AccountRestClient';
import {GlobalService} from '../../../services/global/GlobalService';

@Component({
    template:`
    <div>MyProfile</div>
    <div *ngIf="profile">
    <div> <label>email: </label>{{profile.email}}</div>
    <div> <label>firstName: </label>{{profile.firstName}}</div>
    <div> <label>lastName: </label> {{profile.lastName}}</div>
    <div> <label>sims: </label> {{profile.sims}}</div>
    </div>`,
    providers: [MyProfileService,Interceptor,ProfileRestClient,AccountRestClient]
})

export class MyProfileComponent implements OnInit{
    profile;
    myProfileServie;
    err;
    accountRestClient;
    globalService;
    constructor(myProfileServie:MyProfileService,accountRestClient:AccountRestClient,globalService:GlobalService){
        this.myProfileServie = myProfileServie;
        this.accountRestClient = accountRestClient;
        this.globalService = globalService;
    }
    ngOnInit() {
    console.log('ngOnInit')
    this.profile = this.getProfile();
    }
    getProfile(){
        var token = this.globalService.getToken();
        var key = this.globalService.getKey();
        this.accountRestClient.getAccountInfo('test@kooppi.com',key,token).subscribe(
    //    this.myProfileServie.getMyProfile().subscribe(
                data => {
                    console.log('data:');
                    console.log(data);
                    this.profile = data;
                },
                err =>  {
                    console.log('err:');
                    console.log(err);
                    this.err = err;           
                },
                () => console.log('Complete'));
    }
}