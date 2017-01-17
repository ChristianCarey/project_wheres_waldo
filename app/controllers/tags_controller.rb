class TagsController < ApplicationController

  def create
    @tag = Tag.new(strong_tag_params)
    if @tag.save
      respond_to do |format|
        format.html {}
        format.json { render @tag, locals: { tag: @tag } }
      end
    else
      respond_to do |format|
        format.html {}
        format.json {}
      end
    end
  end

  def index
    @photo = Photo.find(params[:photo_id])
    respond_to do |format|
      format.json
      format.html
    end
  end

  private

    def strong_tag_params
      params.require(:tag).permit(:character_id, :photo_id, :x, :y)
    end


end
