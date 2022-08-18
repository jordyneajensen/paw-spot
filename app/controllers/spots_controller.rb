class SpotsController < ApplicationController

    def index
       spots = Spot.all
       render json: spots 
    end

    def create
        spot = Spot.create(spot_params)

        if spot.valid? 
            render json: spot
        else
            render json: spot.errors, status: 422
        end
    end

    private
    def spot_params
        params.require(:spot).permit(:name, :street, :city, :state, :zip, :description, :image, :user_id)
    end
end
