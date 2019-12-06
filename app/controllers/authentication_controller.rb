class AuthenticationController < ApplicationController
  before_action :authorize_request, only: :verify
  
  # POST /auth/login
  def login
    @business = Business.find_by_name(params[:name])
    if @business.authenticate(params[:password]) #authenticate method provided by Bcrypt and 'has_secure_password'
      token = encode(business_id: @business.id, name: @business.name)
      render json: { business: @business, token: token }, status: :ok
    else
      render json: { error: 'unauthorized' }, status: :unauthorized
    end
  end
  

  # This method is very important. It helps keep data while logged in, if you refresh, instead of logging out.
  # GET /auth/verify
  def verify
    render json: @current_business, status: :ok
  end


  private

  def login_params
    params.permit(:name, :password)
  end

  
end
