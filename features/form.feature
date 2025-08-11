Feature: Step Form Submission

  Background:
    Given I open the form

  Scenario: Test 1 - User submits form with same permanent address
    When I fill profile details correctly
    And I fill residence address
    And I check the same as residence checkbox
    And I select tech stacks
    And I submit the form
    Then I should see a success dialog

  Scenario: Test 2 - User submits form with different permanent address
    When I fill profile details correctly
    And I fill residence address
    And I fill permanent address
    And I select tech stacks
    And I submit the form
    Then I should see a success dialog

  Scenario: Test 3 - User misses fields in profile form
    When I fill only first name in profile
    And I click next in profile form
    Then I should see error message "You missed to fill"

  Scenario: Test 4 - User misses fields in residence address
    When I fill profile details correctly
    And I partially fill residence address
    And I click next in address form
    Then I should see error message "You missed to fill"

  Scenario: Test 5 - User misses fields in permanent address
    When I fill profile details correctly
    And I fill residence address
    And I fill permanent address partially
    And I click next in address form
    Then I should see error message "You missed to fill"

  Scenario: Test 6 - User does not select any tech stack
    When I fill profile details correctly
    And I fill residence address
    And I check the same as residence checkbox
    And I click next in address form
    And I submit the form
    Then I should see error message "Please enter atleast 1 Tech Stack"

  Scenario: Test 7 - User skips filling and navigates tabs
    When I navigate through all tabs without filling form
    And I submit the form
    Then I should see error message "You missed to fill"
