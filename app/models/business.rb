class Business < ApplicationRecord
  has_many :departments, dependent: :destroy
  has_many :employees, through: :departments
end
