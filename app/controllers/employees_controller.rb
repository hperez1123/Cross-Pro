class EmployeesController < ApplicationController

  def index
    @department = Department.find(params[:department_id])
    @employees = Employee.where(department_id: @department.id)
    render json: @employees, include: {department: {include: :business}}, status: :ok
  end
  
  def show
    @employee = Employee.find(params[:id])
    render json: @employee, status: :ok
  end
  
  def create
    @newEmployee = Employee.new(employee_params)
    if @newEmployee.save
      render json: {employee: @newEmployee}, status: :created
    else
      render json: {error: @newEmployee.errors}, status: :unprocessible_entity
    end
  end
  
  def update
    if @employee.update(employee_params)
      render json: @employee, status: :ok
    else 
      render json: {error: @employee.errors}, status: :unprocessible_entity
    end
  end
  
  def destroy
    @employee.destroy
    render json: {employee: @employee}, status: :ok
  end
  
  private
  
  def employee_params
    params.require(:department).permit(:name, :title, :email, :image_url, :phone)
  end
end