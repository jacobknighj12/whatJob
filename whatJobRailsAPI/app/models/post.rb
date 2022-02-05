class Post < ApplicationRecord
belongs_to :category
belongs_to :user

# validate :require_salary_base_and_top
validates_length_of :title, maximum: 50, allow_blank: false, message:'Please enter a title and ensure that it is less than 50 characters.' 
validates_length_of :intro, maximum: 150, allow_blank: false, message:'Please enter an introduction of less than 50 characters.'
validates_length_of :day_to_day, maximum: 200, message:'Please enter day-to-day information in less than 200 characters.'
validates_length_of :career_path, maximum: 200, message:'Please enter day-to-day information in less than 200 characters.'
# validates_length_of :expected_salary_range_from, :expected_salary_range_to, maximum: 15, message:'Please enter a salary range.'
# validates_inclusion_of :difficulty, :in => 1..10, allow_nil: true,  message:'Please enter a difficulty of between 1 and 10.'
validates_length_of :role_details, maximum: 2000, message:'Please enter a difficulty of less than 11.'
validates_length_of :job_description, maximum: 2000, message:'Please enter a difficulty of less than 11.'
validates_length_of :work_life_balance, maximum: 300, message:'Please enter a difficulty of less than 11.'

validates_format_of :work_life_balance, :title, :intro, :day_to_day, :job_security, :industry_growth, :work_life_balance, :role_details, :job_description, with: /\A[a-zA-Z0-9 ,.;'"+-?!%$]*(?:\R[a-zA-Z0-9 ,.;'"+-?!%$]*)*\z/
# validates_format_of :intro, with: /\A[a-zA-Z0-9 ,.;'"+-?!%$]*(?:\R[a-zA-Z0-9 ,.;'"+-?!%$]*)*\z/
# validates_format_of :day_to_day, with: /\A[a-zA-Z0-9 ,.;'"+-?!%$]*(?:\R[a-zA-Z0-9 ,.;'"+-?!%$]*)*\z/
# validates_format_of :job_security, with: /\A[a-zA-Z0-9 ,.;'"+-?!%$]*(?:\R[a-zA-Z0-9 ,.;'"+-?!%$]*)*\z/
# validates_format_of :industry_growth, with: /\A[a-zA-Z0-9 ,.;'"+-?!%$]*(?:\R[a-zA-Z0-9 ,.;'"+-?!%$]*)*\z/
# validates_format_of :work_life_balance, with: /\A[a-zA-Z0-9 ,.;'"+-?!%$]*(?:\R[a-zA-Z0-9 ,.;'"+-?!%$]*)*\z/
# validates_format_of :role_details, with: /\A[a-zA-Z0-9 ,.;'"+-?!%$]*(?:\R[a-zA-Z0-9 ,.;'"+-?!%$]*)*\z/
# validates_format_of :job_description, with: /\A[a-zA-Z0-9 ,.;'"+-?!%$]*(?:\R[a-zA-Z0-9 ,.;'"+-?!%$]*)*\z/

# validates_numericality_of :expected_salary_range_from, :expected_salary_range_to, less_than_or_equal_to: 999999999, :difficulty, :work_life_balance, allow_blank:true, message: 'Please enter a valid expected salary to number without spaces,  brackets or any other symbols.'

validates_numericality_of :expected_salary_range_to, :expected_salary_range_from, greater_than_or_equal_to: 0, less_than_or_equal_to: 999999999, allow_blank:true, message: 'Please enter a valid expected salary in numbers without spaces,  brackets or any other symbols.'

# validates_numericality_of  greater_than_or_equal_to: 0, less_than_or_equal_to: 999999999, allow_blank:true, message: 'Please enter a valid expected salary from number without spaces,  brackets or any other symbols.'
validates_numericality_of :difficulty, greater_than_or_equal_to: 1, less_than_or_equal_to: 10, allow_blank:true, message: 'Please enter a valid difficulty number without spaces, brackets or any other symbols.'


validates_presence_of :expected_salary_range_from, :expected_salary_range_to, if: lambda {self.present? != false}

end

