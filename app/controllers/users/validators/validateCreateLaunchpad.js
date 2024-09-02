const { validateResult } = require('../../../middleware/utils')
const { check } = require('express-validator')

/**
 * Validates get item request
 */
const validateCreateLaunchpad = [
    check('Project_Name')
        .exists()
        .withMessage('Project_Name MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Project Name'),
    check('Token_Name')
        .exists()
        .withMessage('Token_Name MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Token Name'),
    check('Description')
        .exists()
        .withMessage('Description MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Description'),
    check('Network')
        .exists()
        .withMessage('Network MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Network'),

    check('Website')
        .exists()
        .withMessage('Website MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Website'),
    check('WhitePaper'),
    check('Twitter')
        .exists()
        .withMessage('Twitter MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Twitter'),
    check('Discord')
        .exists()
        .withMessage('Discord MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Discord'),
    check('Instagram')
        .exists()
        .withMessage('Instagram MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Instagram'),
    check('Reddit')
        .exists()
        .withMessage('Reddit MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Reddit'),
    check('LinkedIn')
        .exists()
        .withMessage('LinkedIn MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter LinkedIn'),
    check('Logo')
        .exists()
        .withMessage('Logo MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Logo'),
    check('Token_symbol')
        .exists()
        .withMessage('Token_symbol MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Token Symbol'),
    check('Launch_price')
        .exists()
        .withMessage('Launch_price MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Launch Price'),
    check('Total_supply')
        .exists()
        .withMessage('Total_supply MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Total Supply'),
    check('Contract_address')
        .exists()
        .withMessage('Contract_address MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Contract Address'),
    check('Mim_raise_amou')
        .exists()
        .withMessage('Mim_raise_amou MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Minimum raise amout'),
    check('Max_raise_amou')
        .exists()
        .withMessage('Max_raise_amou MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Maximum raise amout'),
    check('Start_date')
        .exists()
        .withMessage('Start_date MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Start Date'),
    check('End_date')
        .exists()
        .withMessage('End_date MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter End Date'),
    check('Token_value_in_usdt')
        .exists()
        .withMessage('Token_value_in_usdt MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Token Value in USDT'),
    check('Owner_address')
        .exists()
        .withMessage('Owner_address MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Owner Address'),
        check('pay_by')
        .exists()
        .withMessage('pay_by MISSING')
        .not()
        .isEmpty()
        .withMessage('Please Enter Values'),
    (req, res, next) => {
        validateResult(req, res, next)
    }
]

module.exports = { validateCreateLaunchpad }
