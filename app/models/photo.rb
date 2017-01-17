class Photo < ApplicationRecord
  has_many :characters_photos
  has_many :characters, through: :characters_photos
  has_many :tags, dependent: :destroy
  has_many :tagged_characters, through: :tags, source: :character
end
