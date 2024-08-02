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

    public getMail = () => this.keycloak.idTokenParsed.email
    public getUsername = () => this.keycloak.tokenParsed?.preferred_username;
    public isLogged = () => !!this.keycloak.token

    public onAuth: () => void;
    public onReady: () => void;

    public async getAccessToken()
    {
        await this.keycloak.updateToken()
        return this.keycloak.token
    }
    
    public logout(url: string)
    {
        this.keycloak.logout({ redirectUri: url })
    }

    public login(redirectURL: string)
    {
        this.keycloak.login({redirectUri: redirectURL })
    }

    public constructor(redirectURL: string)
    {
        this.tokens = null
        this.initOptions = LOGIN_OPTIONS
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
            this.onReady()
        }

        this.keycloak.onAuthSuccess = () =>{
            this.onAuth()
        }

        try 
        {
            if (this.tokens !== null )
            {
                this.keycloak.init({
                    onLoad: 'check-sso',
                    token: this.tokens.at, 
                    refreshToken: this.tokens.rt, 
                    checkLoginIframe: false
                })
            }
            else
            {
                this.keycloak.init({
                    onLoad: 'check-sso'
                })
            }
        }
            catch {
            console.log ("Can't init Keycloak")
        }
    }   
}

export default KC