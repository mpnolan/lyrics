# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended to check this file into your version control system.

ActiveRecord::Schema.define(:version => 20130602042140) do

  create_table "lyrics", :force => true do |t|
    t.string   "artist"
    t.string   "title"
    t.string   "lyrics"
    t.text     "content"
    t.datetime "created_at",                     :null => false
    t.datetime "updated_at",                     :null => false
    t.integer  "hit_count",       :default => 0, :null => false
    t.string   "youtube_id"
    t.string   "printable_title"
  end

  create_table "playlist_taggings", :force => true do |t|
    t.integer  "lyric_id"
    t.integer  "playlist_id"
    t.datetime "created_at",  :null => false
    t.datetime "updated_at",  :null => false
  end

  add_index "playlist_taggings", ["lyric_id"], :name => "index_playlist_taggings_on_lyric_id"
  add_index "playlist_taggings", ["playlist_id"], :name => "index_playlist_taggings_on_playlist_id"

  create_table "playlists", :force => true do |t|
    t.string   "name"
    t.text     "lyric_ids_list"
    t.datetime "created_at",     :null => false
    t.datetime "updated_at",     :null => false
  end

end
