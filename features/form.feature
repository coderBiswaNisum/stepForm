Feature: Step Form

  Scenario: Fill the form with valid data
    Given I open the form
    When I fill the form with valid data
    Then I should see the submission alert
