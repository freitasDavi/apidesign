import { Router } from "express";
import { body, check, oneOf, validationResult } from "express-validator";
import { handleInputErrors } from "./modules/middleware";

const router = Router();

/**
 * Products
 */
router.get('/product', (request, response) => {
    response.json({ message: "Hello" });
});
router.get('/product/:id', () => {});
router.put('/product/:id', body('name').isString(), handleInputErrors, (request, response) => {

});
router.post('/product', body('name').isString(), handleInputErrors, (request, response) => {
    
});
router.delete('/product/:id', () => {});


/**
 * Updates
 */
router.get('/update', () => {});
router.get('/update/:id', () => {});
router.put('/update/:id', 
    body('title').optional, 
    body('body').optional, 
    body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']),
    // oneOf([check('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED'])]), 
    body('version').optional,  
    handleInputErrors,
    () => {});
router.post('/update',
    body('title').exists().isString(), 
    body('body').exists().isString(), 
    handleInputErrors,
 () => {});
router.delete('/update/:id', () => {});

/**
 * Update point
 */
router.get('/updatepoint', () => {});
router.get('/updatepoint/:id', () => {});
router.put('/updatepoint/:id',
    body('name').optional().isString(), 
    body('description').optional().isString(), 
    handleInputErrors,
    () => {});
router.post('/updatepoint',
    body('name').exists().isString(), 
    body('description').exists().isString(), 
    body('updateId').exists().isString(),
    handleInputErrors,
     () => {});
router.delete('/updatepoint/:id', () => {});

export default router;