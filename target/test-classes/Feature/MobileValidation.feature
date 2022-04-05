#Author: your.email@your.domain.com
Feature: Mobile Validation

	Background:
		Given user launches Flipkart application
    And user closes the Login tab


  Scenario: Mobile Validation Steps
    When user search mobile
    And user clicks the mobile
    Then user validates the mobile names
    @run
  Scenario: Data Table Value List
    When user search mobile using one dime list
    |realme|REDMI|vivo|
    And user clicks the mobile
    Then user validates the mobile names
    @run
  Scenario: Data Table Value Map
    When user search mobile using one dime Map
    |1|realme|
    |2|REDMI|
    |3|vivo|
    And user clicks the mobile
    Then user validates the mobile names
    
   Scenario Outline: Data Table Value List
    When user search mobile "<Mobiles>"
    And user clicks the mobile
    Then user validates the mobile names
    
    Examples:
    |Mobiles|
    |realme|
    |REDMI|
    |vivo|
