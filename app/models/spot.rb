class Spot < ApplicationRecord
    belongs_to :user
    validates :name, :street, :city, :state, :zip, :description, :image, presence: true
end
