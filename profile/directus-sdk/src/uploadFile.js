import { createDirectus, rest, uploadFiles, staticToken } from '@directus/sdk';
import multer from 'multer'
import path from 'path'
import fs from 'fs'
import { FormData, Blob } from "formdata-node"

const uploadFile = async(req, res, JWT) => {

    // TODO: CHECK TOKEN FIRST, IF WRONG, THEN FAIL

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './uploads/')
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = new Date().toISOString().slice(0, 10) + '-' + Math.round(Math.random() * 1E9)
            cb(null, 'vvvv-' + uniqueSuffix + path.extname(file.originalname))
        }
    })
        
    const upload = multer({ storage: storage }).single('file')

    upload (req, res, async (err) => {

        if (err instanceof multer.MulterError) {
            return res.status(400).send(err);
        } 
        else if (req.fileValidationError) {
            return res.status(400).send(req.fileValidationError);
        }
        else if (!req.file) {
            return res.status(400).send('Error: Please select an image to upload');
        }
        else if (err) {
            return res.status(400).send(err);
        }
        
        await toDirectus(req.file)
        .then ((response)=>{

            deleteFile (req.file.path);

            return res.json({ 
                tmp: response.id,
                originalName: response.filename_download
            });
        })
        .catch((error)=>{
            console.log (error)
            return res.status(400).send(error);
        })

    })
}

// Delete temp file
const deleteFile = (file) => {
    fs.unlink(file,(err) => {
        if (err) throw err;
    });
}

const toDirectus = async (file) => {

    const client = createDirectus(process.env.DIRECTUSURL)
    .with(staticToken(process.env.DIRECTUSTOKEN))
    .with(rest());

    const fileBuffer = fs.readFileSync(file.path);
    const blob = new Blob([fileBuffer], { type: 'image/png' });

    const form = new FormData()
    form.append("folder", process.env.AVATARSFOLDER)
    form.append("file", blob, file.originalname)

    return client.request(uploadFiles(form))
}

export default uploadFile