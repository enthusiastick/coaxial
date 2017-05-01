class SessionsController < ApplicationController
  def create
    user = User.find_by(github_id: request.env["omniauth.auth"]["uid"])
    if user.present?
      sign_in(user)
    else
      sign_in(User.create(github_id: request.env["omniauth.auth"]["uid"], handle: request.env["omniauth.auth"]["info"]["nickname"]))
    end
    redirect_to post_auth_path
  end

  def delete
    sign_out
    redirect_to root_path
  end
end
