class DepartmentsController < ApplicationController

  def index
    @business = Business.find(params[:business_id])
    @departments = Department.where(business_id: @business.id)
    render json: @departments, include: :business, status: :ok
  end
  
  def show
    @department = Department.find(params[:id])
    render json: @department, status: :ok
  end
  
  def create
    @newDepartment = Department.new(department_params)
    if @newDepartment.save
      render json: {department: @newDepartment}, status: :created
    else
      render json: {error: @newDepartment.errors}, status: :unprocessible_entity
    end
  end
  
  def update
    if @department.update(department_params)
      render json: @department, status: :ok
      else
        render json: {error: @department.errors}, status: :unprocessible_entity
      end
  end
  
  def destroy
    @department.destroy
    render json: {department: @department}, status: :ok
  end
  
  private
  
  def department_params
    params.require(:department).permit(:name)
  end