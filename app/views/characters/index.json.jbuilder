json.array! @photo.characters do |character|
  json.id character.id
  json.name character.name
  json.tagged character.tagged_in?(@photo)
end