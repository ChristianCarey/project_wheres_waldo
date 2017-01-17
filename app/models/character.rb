class Character < ApplicationRecord
  has_many :characters_photos
  has_many :photos, through: :characters_photos
  has_many :tags, dependent: :destroy
end
