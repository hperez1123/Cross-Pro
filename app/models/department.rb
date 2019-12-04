class Department < ApplicationRecord
  belongs_to :business
  has_many :employees, dependent: :destroy
end