import {  test } from '@playwright/test';
import {BasicInfoSurvey} from '../page-objects/basicInfoSurveyPage'

test.beforeEach(async({page}) => {
  await page.goto('https://surveyenginerc.taxcreditco.com/survey.aspx?enc=5a209mATlQcKyXM3xRqb6z9qoFI14Q1%2beuSy4Mvyz4F8b8A4fB6L2uEXfKik6kiCktvzGeqTOq0UG67Ti7QMMKDdhjh3KJTZme0Ugry8N7PenULbtCq%2bCn54k%2fpHP2%2boOewCjvCII3inlEc52rpRut6QWAMxj10M3%2b%2fzgTJ%2f7i%2fRi07j8G0bZzUvqoT1aDy52A4B%2bhXUBBqRwavZS%2fD35bkQajqLUMu30ey7OJgIjQ3RfAPrjC%2fl0z6ZBz8WiBkjGpQyGr69qYNdVNETBH8pAjA4yOl1zhPSIxjp8dxJcFw%3d')   
})

test('mobile device post interview automation test', async({page}) => {
  const navigateTo = new BasicInfoSurvey(page) 
  await navigateTo.basicInfoForm()
  await navigateTo.questionsForm()
  await page.screenshot({ path: 'testEvidente.png' });
  await navigateTo.confirmationForm()
  await navigateTo.redirection()
})