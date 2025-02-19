import Keycloak from 'keycloak-js'
import Constants from './constants'

class KC
{
    getMail = () => this.keycloak.idTokenParsed.email
    getUsername = () => this.keycloak.tokenParsed?.preferred_username;
    // isLogged = () => !!this.keycloak.token

    constructor(redirectURL)
    {
        this.tokens = null
        this.initOptions = Constants.LOGIN_OPTIONS
        this.init(redirectURL)
    }

    async getAccessToken()
    {
        await this.keycloak.updateToken()
        return this.keycloak.token
    }
    
    logout(url)
    {
        this.keycloak.logout({ redirectUri: url })
    }

    login(redirectURL)
    {
        this.keycloak.login({redirectUri: redirectURL })
    }

    init(redirectURL)
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
                    silentCheckSsoRedirectUri: `${location.origin}/profile/sso.html`,
                    token: this.tokens.at, 
                    refreshToken: this.tokens.rt, 
                    checkLoginIframe: false
                })
            }
            else
            {
                this.keycloak.init({
                    onLoad: 'check-sso',
                    silentCheckSsoRedirectUri: `${location.origin}/profile/sso.html`
                })
            }
        }
            catch {
            console.log ("Can't init Keycloak")
        }
    }   
}

export default KC