$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Feature/MobileValidation.feature");
formatter.feature({
  "name": "Mobile Validation",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launches Flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "MobileValidation.user_launches_Flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes the Login tab",
  "keyword": "And "
});
formatter.match({
  "location": "MobileValidation.user_closes_the_Login_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Data Table Value List",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@run"
    }
  ]
});
formatter.step({
  "name": "user search mobile using one dime list",
  "rows": [
    {
      "cells": [
        "realme",
        "REDMI",
        "vivo"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MobileValidation.user_search_mobile_using_one_dime_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks the mobile",
  "keyword": "And "
});
formatter.match({
  "location": "MobileValidation.user_clicks_the_mobile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates the mobile names",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileValidation.user_validates_the_mobile_names()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...bow Fantasy, 128 GB)[]\u003e but was:\u003c...bow Fantasy, 128 GB)[  (6 GB RAM)]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.flipkart.stepdefinition.MobileValidation.user_validates_the_mobile_names(MobileValidation.java:56)\r\n\tat ✽.user validates the mobile names(src/test/resources/Feature/MobileValidation.feature:18)\r\n",
  "status": "failed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "user launches Flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "MobileValidation.user_launches_Flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes the Login tab",
  "keyword": "And "
});
formatter.match({
  "location": "MobileValidation.user_closes_the_Login_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Data Table Value Map",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@run"
    }
  ]
});
formatter.step({
  "name": "user search mobile using one dime Map",
  "rows": [
    {
      "cells": [
        "1",
        "realme"
      ]
    },
    {
      "cells": [
        "2",
        "REDMI"
      ]
    },
    {
      "cells": [
        "3",
        "vivo"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "MobileValidation.user_search_mobile_using_one_dime_Map(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks the mobile",
  "keyword": "And "
});
formatter.match({
  "location": "MobileValidation.user_clicks_the_mobile()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates the mobile names",
  "keyword": "Then "
});
formatter.match({
  "location": "MobileValidation.user_validates_the_mobile_names()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...dnight Black, 64 GB)[]\u003e but was:\u003c...dnight Black, 64 GB)[  (4 GB RAM)]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.flipkart.stepdefinition.MobileValidation.user_validates_the_mobile_names(MobileValidation.java:56)\r\n\tat ✽.user validates the mobile names(src/test/resources/Feature/MobileValidation.feature:26)\r\n",
  "status": "failed"
});
formatter.uri("src/test/resources/Feature/TelevisionValidation.feature");
formatter.feature({
  "name": "Television Validation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Data Table Value List",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@run"
    }
  ]
});
formatter.step({
  "name": "user launches flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "TvValidation.user_launches_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes the login tab",
  "keyword": "And "
});
formatter.match({
  "location": "TvValidation.user_closes_the_login_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search television using one dime list",
  "rows": [
    {
      "cells": [
        "LG tv",
        "oneplus tv",
        "Samsung tv"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TvValidation.user_search_television_using_one_dime_list(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks the television",
  "keyword": "And "
});
formatter.match({
  "location": "TvValidation.user_clicks_the_television()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates the television names",
  "keyword": "Then "
});
formatter.match({
  "location": "TvValidation.user_validates_the_television_names()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...LED Smart Android TV[]\u003e but was:\u003c...LED Smart Android TV[  (32HD2A00)]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.flipkart.stepdefinition.TvValidation.user_validates_the_television_names(TvValidation.java:52)\r\n\tat ✽.user validates the television names(src/test/resources/Feature/TelevisionValidation.feature:17)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "Data Table Value Map",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@run"
    }
  ]
});
formatter.step({
  "name": "user launches flipkart application",
  "keyword": "Given "
});
formatter.match({
  "location": "TvValidation.user_launches_flipkart_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user closes the login tab",
  "keyword": "And "
});
formatter.match({
  "location": "TvValidation.user_closes_the_login_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user search television using one dime Map",
  "rows": [
    {
      "cells": [
        "1",
        "LG tv"
      ]
    },
    {
      "cells": [
        "2",
        "oneplus tv"
      ]
    },
    {
      "cells": [
        "3",
        "Samsung tv"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "TvValidation.user_search_television_using_one_dime_Map(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks the television",
  "keyword": "And "
});
formatter.match({
  "location": "TvValidation.user_clicks_the_television()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user validates the television names",
  "keyword": "Then "
});
formatter.match({
  "location": "TvValidation.user_validates_the_television_names()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003c...LED Smart Android TV[]\u003e but was:\u003c...LED Smart Android TV[  (32HD2A00)]\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:117)\r\n\tat org.junit.Assert.assertEquals(Assert.java:146)\r\n\tat com.flipkart.stepdefinition.TvValidation.user_validates_the_television_names(TvValidation.java:52)\r\n\tat ✽.user validates the television names(src/test/resources/Feature/TelevisionValidation.feature:27)\r\n",
  "status": "failed"
});
});