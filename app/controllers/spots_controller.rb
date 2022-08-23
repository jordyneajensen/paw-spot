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

    def update
        spot = Spot.find(params[:id])
        spot.update(spot_params)
        render json: spot
    end
    
    def destroy
        spot = Spot.find(params[:id])  
        spot.destroy
        render json: spot
    end

    private
    def spot_params
        params.require(:spot).permit(:name, :street, :city, :state, :zip, :description, :image, :category, :user_id)
    end
end
