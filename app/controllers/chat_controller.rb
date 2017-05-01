class ChatController < ApplicationController
  before_action :authenticate_user!
end
