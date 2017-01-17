class CreateCharactersPhotos < ActiveRecord::Migration[5.0]
  def change
    create_table :characters_photos do |t|
      t.integer :character_id
      t.integer :photo_id
      t.timestamps
    end

    add_index :characters_photos, [:photo_id, :character_id], unique: true
  end
end
