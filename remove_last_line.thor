class Rboo < Thor
  desc "remove_last_line dir", "remove last line from the all the files in the directory"
  def remove_last_line(dir)
    puts "You supplied the dir: #{dir}"
    files = Dir["#{dir}/**/*.js"]
    files.each do |filename|
      puts filename
      content = File.open(filename, "rb") { |io| io.read }
      File.open(filename, "wb") { |io|
          io.print content.chomp
          # io.print "\n"    # Your Stuff Goes Here 
      }
    end
  end
  desc "replace_word File","replace a word form the file"
  options :reg => :required, :rep => :required
  def replace_word(file)
    File.open(file, "r+") do |f|
      old_pos = 0
      f.each do |line|
          f.pos = old_pos   # this is the 'rewind'
          f.print line.gsub(options[:reg], options[:rep])
          old_pos = f.pos
      end
    end
  end
end 