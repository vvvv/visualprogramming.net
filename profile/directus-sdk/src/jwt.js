import jsonwebtoken from 'jsonwebtoken'
import fs from 'fs'

class jwt
{
    #cert

    constructor()
    {
        this.cert = fs.readFileSync('public.pem');
    }

    verify(token)
    {
        const mail = jsonwebtoken.verify(token, this.cert, { algorithms: ['RS256'] }, function(err, decoded) {
            if (err)
            {
                throw (err)
            }
            else
            {
                return decoded.email
            }
          })
        return mail
    }
}

export default jwt