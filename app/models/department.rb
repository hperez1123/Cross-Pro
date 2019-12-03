class Department < ApplicationRecord
  belongs_to :businesses
  has_many :employees
end