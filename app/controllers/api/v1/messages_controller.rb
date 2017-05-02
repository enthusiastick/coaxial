class Api::V1::MessagesController < Api::ApiController
  def create
    if params[:message].present?
      ActionCable.server.broadcast "chat_channel", message: params[:message], handle: current_user.handle, key: "#{Time.now.to_datetime.strftime('%Q')}-#{current_user.id}"
      render json: { message: params[:message], handle: current_user.handle }, status: :accepted
    else
      render json: { errors: "bad request" }, status: :bad_request
    end
  end
end
