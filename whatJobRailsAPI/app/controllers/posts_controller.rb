class PostsController < ApplicationController
    before_action :authenticate_user!, except: [:index, :random, :show ]
    before_action :set_post, only: [:show, :update, :destroy]
    before_action :check_ownership, only: [:update, :destroy]
    
    def index
        @posts = Post.all
        render json: @posts
    end

    def create
        @post = current_user.posts.create(post_params)
        if @post.errors.any?
           render json: @post.errors, status: :unprocessable_entity
        else
           render json: @post, status: 201
        end
    end

    def show
        render json: @post #.transform_post
    end


    def update
        @post.update(post_params)
        if @post.errors.any?
            render json: @post.errors, status: :unprocessable_entity
        else
            render json: @post, status: 201
        end
    end


    def destroy
        @post.delete
        render json: 204

    end

    private
    def post_params
        params.permit(:user_id, :category_id, :title, :intro, :day_to_day, :career_path, :expected_salary_range_from, :expected_salary_range_to, :difficulty, :job_security, :industry_growth, :work_life_balance, :role_details, :job_description)
    end
    
    def set_post
        begin
        @post = Post.find(params[:id])
        rescue
            render json: {error: "Post not found"}, status: 404
        end
    end

    def check_ownership 
        if current_user.id != @post.user.id 
            render json: {error: "You don't have permission to do that"}, status: 401
        end 
    end 

end
