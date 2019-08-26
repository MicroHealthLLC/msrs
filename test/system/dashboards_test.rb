require "application_system_test_case"

class DashboardsTest < ApplicationSystemTestCase
  setup do
    @dashboard = dashboards(:one)
  end

  test "visiting the index" do
    visit dashboards_url
    assert_selector "h1", text: "Dashboards"
  end

  test "creating a Dashboard" do
    visit dashboards_url
    click_on "New Dashboard"

    fill_in "Name", with: @dashboard.name
    fill_in "Report", with: @dashboard.report_id
    fill_in "User", with: @dashboard.user_id
    click_on "Create Dashboard"

    assert_text "Dashboard was successfully created"
    click_on "Back"
  end

  test "updating a Dashboard" do
    visit dashboards_url
    click_on "Edit", match: :first

    fill_in "Name", with: @dashboard.name
    fill_in "Report", with: @dashboard.report_id
    fill_in "User", with: @dashboard.user_id
    click_on "Update Dashboard"

    assert_text "Dashboard was successfully updated"
    click_on "Back"
  end

  test "destroying a Dashboard" do
    visit dashboards_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Dashboard was successfully destroyed"
  end
end
