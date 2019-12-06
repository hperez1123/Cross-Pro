class Business < ApplicationRecord
  has_secure_password
  validates :password, length: { minimum: 5 }

  has_many :departments, dependent: :destroy
  has_many :employees, through: :departments
end
