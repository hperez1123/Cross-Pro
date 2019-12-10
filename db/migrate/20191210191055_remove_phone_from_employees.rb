class RemovePhoneFromEmployees < ActiveRecord::Migration[6.0]
  def change

    remove_column :employees, :phone, :integer
  end
end
