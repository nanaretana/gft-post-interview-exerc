import {Locator, Page, expect} from "@playwright/test";

export class BasicInfoSurvey {
    readonly page : Page
    readonly firstNameInputItem: Locator 
    readonly lastNameInputItem: Locator
    readonly emailInputItem: Locator 
    readonly streetAddressInputItem: Locator 
    readonly cityInputItem: Locator 
    readonly zipCodeInputItem: Locator 
    readonly nextStepButton: Locator 
    readonly snapButton: Locator
    readonly tanfButton: Locator 
    readonly usVeteranButton: Locator 
    readonly disabilityButton: Locator 
    readonly unempBenefitButton: Locator
    readonly userFullNameTB: Locator 
    
    constructor(page: Page){
        this.page = page
        //Basic Info page elements
        this.firstNameInputItem = page.getByLabel('First Name')
        this.lastNameInputItem = page.getByLabel('Last Name')
        this.emailInputItem = page.getByLabel('Email Address')
        this.streetAddressInputItem = page.getByLabel('Street Address')
        this.cityInputItem = page.getByLabel('City')
        this.zipCodeInputItem = page.getByLabel('Zip Code')
        this.nextStepButton = page.getByRole('button', {name: 'Next'} )
        // Questions Form page elements
        this.snapButton = page.locator('#SurveyControl_Question11396').getByText('No')
        this.tanfButton = page.locator('#SurveyControl_Question11397').getByText('No')
        this.usVeteranButton = page.locator('#SurveyControl_Question914').getByText('No')
        this.disabilityButton = page.locator('#SurveyControl_Question11361').getByText('No')
        this.unempBenefitButton = page.locator('#SurveyControl_Question1244').getByText('No')
        //Confirmation page elements
        this.userFullNameTB = page.getByLabel('Additional Information Thank')
    }

    async basicInfoForm(){
        await this.firstNameInputItem.fill('Joe')
        await this.lastNameInputItem.fill('Sample')
        await this.emailInputItem.fill('xyztest1001@taxcc.bg')
        await this.streetAddressInputItem.fill('Street Line 1 ')
        await this.cityInputItem.fill('Monterey Park')
        await this.zipCodeInputItem.fill('91754')
        await this.nextStepButton.click()
    }

    async questionsForm(){
        await this.snapButton.click()
        await this.tanfButton.click()
        await this.usVeteranButton.click()
        await this.disabilityButton.click()
        await this.unempBenefitButton.click()
        await this.nextStepButton.click()
    }

    async confirmationForm(){
        const nameUser = await this.userFullNameTB.inputValue()
        expect(nameUser).toEqual('Joe Sample')
        await this.page.getByRole('button', { name: 'Submit form' }).click()
    }

    async redirection(){
        const currentlyURL =  this.page.url()
        expect(currentlyURL).toEqual('https://www.experian.com/employer-services')
    }
}