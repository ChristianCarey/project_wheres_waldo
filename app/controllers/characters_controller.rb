class CharactersController < ApplicationController
  
  def index

    @photo = Photo.find(params[:photo_id])    

    respond_to do |format|
      format.json
    end
  end
end
