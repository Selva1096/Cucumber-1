package com.flipkart.resources;

import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import io.github.bonigarcia.wdm.WebDriverManager;

public class Commonactions {
	public static WebDriver driver;
	
	public void browserLaunch(String url) {
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.get(url);
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
	}
	public void search(WebElement we, String value) {
		we.sendKeys(value,Keys.ENTER);
	}
	public void button(WebElement we) {
		we.click();
	}
	public void windowHandling () {
		String pw = driver.getWindowHandle();
		Set<String> cw = driver.getWindowHandles();
		for(String x : cw) {
			if (!pw.equals(cw)) {
				driver.switchTo().window(x);
			}
		}
	}
}
