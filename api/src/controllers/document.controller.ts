import { NextFunction, Request, Response } from "express";
import { IUser } from "../models/user.model";
import documentModel from "../models/document.model";
import crypto from 'crypto'
export const createDocument = async (req: Request, res: Response, next: NextFunction) =>
{
    if (req.isAuthenticated())
    {
        const currentUser = req.user as IUser;
        try
        {
            const newDocument = await documentModel.create({ user: currentUser.id, name:`${crypto.randomBytes(6).toString('hex')}.md` });
            res.status(200).json({
                id: newDocument.id,
            });
        } catch (e)
        {
            res.status(500).send({ message: "An Error Occured" });
            console.log("error creating document:", e);
        }

    }
};
export const getDocuments = async (req: Request, res: Response, next: NextFunction) =>
{
    if (req.isAuthenticated())
    {
        const userData = req.user as IUser;
        try
        {

            const myDocuments = await documentModel.find({ user: userData.id });
            if (!myDocuments) return res.status(200).json({ documents: [] });
            res.status(200).json({
                documents: myDocuments.map(document =>
                {
                    return {
                        id: document._id,
                        name: document.name,
                        createdAt: document.createdAt
                    };
                })
            });
        } catch (e)
        {
            console.log('Error fetching documents: ', e);
        }
    } else
    {
        res.status(404).redirect(`${req.protocol}://${req.hostname}/welcome`);
    }
};
export const getDocument = async (req: Request, res: Response, next: NextFunction) =>
{
    if (req.isAuthenticated())
    {
        try
        {
            const { id } = req.params;
            const document = await documentModel.findById(id);
            if (!document) return res.status(404).send({ message: 'document does not exist' });
            res.status(200).send({
                document: {
                    createdAt: document.createdAt,
                    name: document.name,
                    content: document.content
                }
            });
        }
        catch (e)
        {
            res.status(500).send({ message: 'an error occured while fetching document' });
        }
    }
};
export const updateDocument = async (req: Request, res: Response, next: NextFunction) =>
{
    if (req.isAuthenticated())
    {
        const { id } = req.params;
        const { markdown, name } = req.body;
        console.log(markdown, name);
        try
        {
            const updatedDocument = await documentModel.findByIdAndUpdate(id, { content:markdown, name });
            res.status(200).send({ message: 'success' });

        } catch (e)
        {
            res.status(500).send({ message: 'an error occured while updating document' });
        }
    }else{
        res.status(404).redirect(`${req.protocol}://${req.hostname}/welcome`);
    }
}
    export const deleteDocument = async (req: Request, res: Response, next: NextFunction) =>
    {
        if (req.isAuthenticated())
        {
            const { id } = req.params;
            try
            {
                const deletedDocument = await documentModel.findByIdAndDelete(id);
                res.status(200).json({ message: 'success' });
            } catch (e)
            {
                res.status(500).json({ message: 'delete failed' });
            }
        }
    };