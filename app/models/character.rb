class Character < ApplicationRecord
  has_many :characters_photos
  has_many :photos, through: :characters_photos
  has_many :tags, dependent: :destroy
  has_many :photos_tagged_in, through: :tags, source: :photo

  def tagged_in?(photo)
    photos_tagged_in.include?(photo)
  end
end
