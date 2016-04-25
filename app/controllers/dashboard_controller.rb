require 'httparty'
class DashboardController < ApplicationController
  include HTTParty
  def index
  end

  def api_call_function
    search_term = params[:course]
    response1 = HTTParty.get('https://api.coursera.org/api/courses.v1?q=search&query='+ search_term + "&includes=instructorIds,partnerIds&fields=instructorIds,partnerIds")
    response3 = HTTParty.get('https://api.coursera.org/api/partners.v1')
    response4 = HTTParty.get('https://api.coursera.org/api/instructors.v1')
    render :json => {a: response1, c: response3, d: response4}
  end

end
