package com.flipkart.objectrepository;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.flipkart.resources.Commonactions;

public class TvValidationPage extends Commonactions {
	public TvValidationPage() {
		PageFactory.initElements(driver, this);
		}
	@FindBy(xpath ="//button[text()='✕']")
	private WebElement closeIcon;
	
	@FindBy(name ="q")
	private WebElement searchBox;

	public WebElement getCloseIcon() {
		return closeIcon;
	}

	public WebElement getSearchBox() {
		return searchBox;
	}
}
