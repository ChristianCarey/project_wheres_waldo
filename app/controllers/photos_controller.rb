class PhotosController < ApplicationController
  before_action :set_photo, only: [:show]

  def index
    redirect_to Photo.first
  end

  def show
  end

  private

    def strong_photo_params
      params.require(:photo).permit(:url)
    end

    def set_photo
      @photo = Photo.find(params[:id])
    end
end
