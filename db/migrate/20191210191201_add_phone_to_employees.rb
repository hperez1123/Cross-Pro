class AddPhoneToEmployees < ActiveRecord::Migration[6.0]
  def change
    add_column :employees, :phone, :string
  end
end
