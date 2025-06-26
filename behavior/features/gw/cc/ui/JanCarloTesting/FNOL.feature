@TestComponent=CIC
Feature: fnol

@fnol 
Scenario: Capturing first notice of loss  
    Given I login to Claim Center with Adjuster Role                  
    When I create a claim
    # Then Claim is created

# @MultipleClaimsCreation 
# Scenario: Capturing Multiple claims 
#     Given I login to Claim Center with Adjuster Role                  
#     When I create 1 claims
#     Then Claim is created