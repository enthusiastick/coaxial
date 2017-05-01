class PagesController < ApplicationController
  def index
    redirect_to chat_index_path if user_signed_in?
  end
end
