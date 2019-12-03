class BusinessesController < ApplicationController
  before_action :authorize_request, except: %i[index show]
  
  def index
    @businesses = Business.all
    render json: @businesses, include: :departments, status: :ok
  end

  def show
    @business = Business.find(params[:id])
    render json: @business, status: :ok
  end

  def create
    @newBusiness = Business.new(business_params)
      if @newBusiness.save
        render json: {business: @newBusiness}, status: :created
      else
        render json: {error: @newBusiness.errors}, status: :unprocessible_entity
      end
  end

  def update
    if @business.update(business_params)
      render json: @business, status: :ok
    else
      render json: {error: @business.errors}, status: :unprocessible_entity
    end
  end

  def destroy
    @business.destroy
    render json: {business: @business}, status: :ok
  end

  private

  def business_params
    params_require(:business).permit(:name, :password, :industry, :image_url, :mission, :motto, :network, :sell, :collaborate)

end