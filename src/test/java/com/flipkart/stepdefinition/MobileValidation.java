package com.flipkart.stepdefinition;

import java.util.List;
import java.util.Map;
import java.util.Set;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import com.flipkart.resources.Commonactions;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;

public class MobileValidation extends Commonactions {
	Commonactions ca = new Commonactions();
	static String text;
	static String mn;
	@Given("user launches Flipkart application")
	public void user_launches_Flipkart_application() {
		ca.browserLaunch("https://www.flipkart.com/"); 
	}

	@Given("user closes the Login tab")
	public void user_closes_the_Login_tab() {
		WebElement close = driver.findElement(By.xpath("//button[contains(@class,'2doB4z')]"));
		ca.button(close);
	}

	@When("user search mobile")
	public void user_search_mobile() {
		mn = "vivo";
		WebElement srch = driver.findElement(By.name("q"));
		ca.search(srch, mn);
	}

	@When("user clicks the mobile")
	public void user_clicks_the_mobile() {
		WebElement option = driver.findElement(By.xpath("(//div[contains(text(),'"+mn+"')])[1]"));
		text = option.getText();
		ca.button(option);
	}
	
	@Then("user validates the mobile names")
	public void user_validates_the_mobile_names() {  
		String pw = driver.getWindowHandle();
		Set<String> cw = driver.getWindowHandles();
		for(String x : cw) {
			if (!pw.equals(cw)) {
				driver.switchTo().window(x);
			}
		}
		WebElement tv = driver.findElement(By.xpath("//span[contains(text(),'"+mn+"')]"));
		String text1 = tv.getText();
		Assert.assertEquals(text, text1);
	}
	@When("user search mobile using one dime list")
	public void user_search_mobile_using_one_dime_list(DataTable dataTable) {
		WebElement srch = driver.findElement(By.name("q"));
		List<String> tvlist = dataTable.asList();
		mn = tvlist.get(2);
		ca.search(srch, mn);
	}
	@When("user search mobile using one dime Map")
	public void user_search_mobile_using_one_dime_Map(DataTable dataTable) {
		WebElement srch = driver.findElement(By.name("q"));
		Map<String, String> tvMap = dataTable.asMap(String.class, String.class);
		mn =tvMap.get("2");
		ca.search(srch, mn);
	}
	@When("user search mobile {string}")
	public void user_search_mobile(String Mobiles) {
		mn = Mobiles;
		WebElement srch = driver.findElement(By.name("q"));
		ca.search(srch, mn);
	}
	
}


