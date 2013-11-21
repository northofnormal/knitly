class Version < ActiveRecord::Base
  belongs_to :pattern
  has_many :steps
  accepts_nested_attributes_for :steps, :allow_destroy => true
end
