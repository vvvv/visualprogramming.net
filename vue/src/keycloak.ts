import Keycloak from 'keycloak-js'
import { LOGIN_OPTIONS, LOGIN_REDIRECT } from './constants'

type Tokens =  {
    at: string; 
    rt: string
}

type InitOptions = {
    url: string,
    realm: string, 
    clientId: string
}

class KC
{
    private keycloak: Keycloak
    private tokens: Tokens
    private initOptions: InitOptions
    private onReady: ()=> void

    public getAccessToken = () => this.keycloak.token
    public getMail = () => this.keycloak.idTokenParsed.email
    public getUsername = () => this.keycloak.tokenParsed?.preferred_username;
    public isLogged = () => !!this.keycloak.token
    
    public logout(url: string)
    {
        this.keycloak.logout({ redirectUri: url })
    }

    public login(redirectURL: string)
    {
        this.keycloak.login({redirectUri: redirectURL })
    }

    public constructor(redirectURL: string, onReady: ()=> void)
    {
        this.tokens = null
        this.initOptions = LOGIN_OPTIONS
        this.onReady = onReady
        this.init(redirectURL)
    }

    public vvvvQuery()
    {
        // try{
        //     window.vvvvQuery(
        //     { 
        //       request: 'sendToVL',
        //       arguments: { "refreshToken": keycloak.refreshToken, "accessToken": keycloak.token }
        //     });
        // }
        // catch{}
    }

    public init(redirectURL: string)
    {
        this.keycloak = new Keycloak(this.initOptions)

        this.keycloak.onReady = (auth) => {
            if (auth) 
            {
                this.onReady()
            }
        }

        try 
        {
            if (this.tokens !== null )
            {
                this.keycloak.init({
                    onLoad: 'check-sso',
                    token: this.tokens.at, 
                    refreshToken: this.tokens.rt, 
                    checkLoginIframe: false,
                    redirectUri: redirectURL
                })
            }
            else
            {
                this.keycloak.init({
                    onLoad: 'check-sso',
                    redirectUri: redirectURL
                })
            }
        }
            catch {
            console.log ("Can't init Keycloak")
        }
    }   
}

export default KC


// this.keycloak.onAuthSuccess = () =>{
//     this.initCompleted = true;
//     this.tokens.rt = this.keycloak.refreshToken;
// }