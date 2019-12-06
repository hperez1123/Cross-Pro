class BusinessesController < ApplicationController
  before_action :set_business, only: [:show, :update, :destroy]
  before_action :authorize_request, except: %i[index show create]
  
  def index
    @businesses = Business.all
    render json: @businesses, include: { departments: { include: :employees } }, status: :ok
  end

  def show
    @business = Business.find(params[:id])
    render json: @business
  end

  def create
    @newBusiness = Business.new(business_params)
      if @newBusiness.save
        render json: @newBusiness, status: :created
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

  def set_business 
    @business = Business.find(params[:id])

  end
  def business_params
    params.require(:business).permit(:name, :password, :industry, :image_url, :mission, :motto, :network, :sell, :collaborate)
  end
end